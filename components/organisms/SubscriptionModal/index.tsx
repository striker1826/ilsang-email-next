import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import toast from "react-hot-toast";
import * as yup from "yup";

interface Props {
  isOpen: boolean;
  closeEvent: () => void;
}

const SubscriptionModal = ({ isOpen = false, closeEvent }: Props) => {
  const emailInputRef = useRef<HTMLInputElement | null>(null);

  const submitSubscription = async () => {
    const emailInputValue = emailInputRef.current?.value;

    const emailSchema = yup
      .string()
      .email("올바른 이메일 형식이 아닙니다.")
      .required("이메일은 필수값입니다.");

    const emailValidateResult = await emailSchema
      .validate(emailInputValue)
      .then(() => {
        return {
          result: true,
        };
      })
      .catch((err) => {
        console.log(err.message);
        toast.error(err.message);
        return {
          result: false,
        };
      });

    if (!emailValidateResult.result) {
      return;
    }

    try {
      await fetch("/api/subscribers", {
        method: "POST",
        body: JSON.stringify({ email: emailInputValue }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      toast.success("구독이 성공적으로 등록되었습니다.");
      closeEvent();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="flex flex-col justify-center bg-white p-8 rounded-lg shadow-lg w-[90%] max-w-md"
            initial={{ y: "50%", scale: 0.8, opacity: 0 }}
            animate={{ y: "0%", scale: 1, opacity: 1 }}
            exit={{ y: "50%", scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-2xl font-bold">
                이메일 입력하고 무료로 구독하기
              </h2>
              <button
                onClick={closeEvent}
                className="cursor-pointer border-[2px] border-[#b8b6b6] rounded-[4px]"
              >
                <Image
                  src={"/assets/closeIcon.svg"}
                  alt="closeIcon"
                  width={24}
                  height={24}
                />
              </button>
            </div>
            <p className="mb-6 font-[600] text-[14px] text-[#2A2A2A]">
              구독을 신청하시면 3일에 한번씩 일상생활에서 놓치기 쉬운 지식들을
              메일로 전해드립니다
            </p>
            <input
              ref={emailInputRef}
              className="mb-6 w-full border-[2px] py-[8px] px-[12px] flex border-[#b8b6b6]"
              placeholder="example@email.com"
            />
            <button
              onClick={submitSubscription}
              className="bg-blue-500 w-full text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              무료로 구독하기
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SubscriptionModal;
