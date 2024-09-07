import Globe from '@/components/magicui/globe';
import { MapPin } from 'lucide-react';

export function GlobeSection() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg border border-border/40 bg-card px-40 pt-8 pb-60 shadow-sm">
      <span className="absolute top-4 left-4 flex items-center font-medium text-sm">
        <MapPin className="mr-1 size-4" />
        Tehran, IRAN
      </span>
      <Globe />
    </div>
  );
}
