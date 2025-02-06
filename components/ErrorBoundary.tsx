"use client";

import { useState, useEffect, ReactNode } from "react";
import { useRouter } from "next/navigation";

// ErrorBoundaryProps는 ErrorBoundary에 전달될 props 타입을 정의합니다.
interface ErrorBoundaryProps {
  children: ReactNode;
}

// ErrorBoundaryWrapperProps는 ErrorBoundaryWrapper에 전달될 props 타입을 정의합니다.
interface ErrorBoundaryWrapperProps {
  onError: (error: Error, errorInfo: React.ErrorInfo) => void;
  children: ReactNode;
}

const ErrorBoundary = ({ children }: ErrorBoundaryProps) => {
  const [hasError, setHasError] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (hasError) {
      router.push("/404"); // 에러가 발생하면 404 페이지로 리디렉션
    }
  }, [hasError, router]);

  const handleError = (error: Error, errorInfo: React.ErrorInfo) => {
    console.error("에러 발생:", error, errorInfo);
    setHasError(true);
  };

  if (hasError) {
    return null; // 에러 발생 시 아무것도 렌더링하지 않음 (404 페이지로 리디렉션)
  }

  return (
    <ErrorBoundaryWrapper onError={handleError}>
      {children}
    </ErrorBoundaryWrapper>
  );
};

// ErrorBoundaryWrapper 컴포넌트 타입 지정
const ErrorBoundaryWrapper = ({
  onError,
  children,
}: ErrorBoundaryWrapperProps) => {
  useEffect(() => {
    // 자식 컴포넌트에서 에러 발생 시 핸들링
    const errorListener = (event: any) => {
      onError(event.error, event.errorInfo);
    };
    window.addEventListener("error", errorListener);
    return () => {
      window.removeEventListener("error", errorListener);
    };
  }, [onError]);

  return <>{children}</>;
};

export default ErrorBoundary;
