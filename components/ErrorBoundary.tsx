"use client";

import { Component, ErrorInfo, ReactNode } from "react";
import { useRouter } from "next/navigation";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  state: State = {
    hasError: false,
  };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true }; // 에러 발생 시 상태 업데이트
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // 에러 로깅 등의 작업을 추가할 수 있습니다.
    console.error("에러 발생:", error, errorInfo);
  }

  componentDidUpdate() {
    if (this.state.hasError) {
      this.redirectTo404(); // 에러가 발생하면 404 페이지로 리디렉션
    }
  }

  redirectTo404() {
    const router = useRouter();
    router.push("/404");
  }

  render() {
    if (this.state.hasError) {
      return null; // 에러 발생 시 아무것도 렌더링하지 않음 (404 페이지로 리디렉션)
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
