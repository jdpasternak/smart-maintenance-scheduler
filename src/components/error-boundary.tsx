'use client';

import { Component, ErrorInfo, ReactNode } from 'react';
import { logError } from '@/lib/logger';

type Props = {
  children: ReactNode;
};

type State = {
  hasError: boolean;
};

export default class ErrorBoundary extends Component<Props, State> {
  state: State = {
    hasError: false,
  };

  static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    logError('Client ErrorBoundary caught an error', { error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-6 text-center text-red-600">
          <h1 className="text-2xl font-semibold">Something went wrong.</h1>
          <p className="text-sm">Please refresh the page or try again later.</p>
        </div>
      );
    }

    return this.props.children;
  }
}
