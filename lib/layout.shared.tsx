import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName, gitConfig } from './shared';

// ps-2 lines the wordmark up with the text of the sidebar items below it.
function Logo() {
  return (
    <span className="flex h-8 items-center ps-2">
      <img src="/logo-light.svg" alt={appName} width={90} height={24} className="h-6 w-auto dark:hidden" />
      <img src="/logo-dark.svg" alt={appName} width={90} height={24} className="hidden h-6 w-auto dark:block" />
    </span>
  );
}

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: <Logo />,
      url: '/docs',
    },
    githubUrl: 'https://github.com/getcoinio/coinio',
  };
}
