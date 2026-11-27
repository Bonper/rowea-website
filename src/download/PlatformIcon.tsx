import { Smartphone, Tablet, Monitor, Laptop, Terminal, Compass } from 'lucide-react';
import type { OSPlatform } from '../device-detection/types';

export function PlatformIcon({
  platform,
  className = 'h-5 w-5',
}: {
  platform: OSPlatform;
  className?: string;
}) {
  switch (platform) {
    case 'android':
      return <Smartphone className={className} aria-hidden="true" />;
    case 'ios':
      return <Tablet className={className} aria-hidden="true" />;
    case 'windows':
      return <Monitor className={className} aria-hidden="true" />;
    case 'macos':
      return <Laptop className={className} aria-hidden="true" />;
    case 'linux':
      return <Terminal className={className} aria-hidden="true" />;
    case 'huawei':
      return <Smartphone className={className} aria-hidden="true" />;
    default:
      return <Compass className={className} aria-hidden="true" />;
  }
}
