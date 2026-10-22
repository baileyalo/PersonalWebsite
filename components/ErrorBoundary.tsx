import { Component, type ErrorInfo, type ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  error: Error | null;
}

export default class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { error: null };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { error };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    console.error('Unhandled UI error:', error, info.componentStack);
  }

  render(): ReactNode {
    if (this.state.error) {
      return (
        <div role="alert" className="p-6 m-6 bg-red-100 text-red-700 rounded-lg text-center">
          <h2 className="text-xl font-bold mb-2">Something went wrong</h2>
          <pre className="whitespace-pre-wrap break-all">{this.state.error.message}</pre>
        </div>
      );
    }

    return this.props.children;
  }
}
