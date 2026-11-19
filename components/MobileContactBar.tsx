import { ReachSanjeev } from "@/components/ui";

export function MobileContactBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-white/95 px-3 pt-2 shadow-[0_-8px_24px_rgba(16,36,63,0.12)] backdrop-blur md:hidden pb-[max(0.5rem,env(safe-area-inset-bottom))]">
      <ReachSanjeev />
    </div>
  );
}
