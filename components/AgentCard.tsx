import { EmailAddress, IconAgentBadge, NameWithCredentials, PhoneWithText, Portrait } from "@/components/ui";

export function AgentCard() {
  return (
    <div className="mx-auto w-full max-w-md text-center lg:mx-0">
      <Portrait priority />
      <p className="mt-5 font-display text-3xl leading-tight text-navy sm:text-4xl">
        <NameWithCredentials />
      </p>
      <p className="mt-1 text-base text-slate">Broker Associate, eXp Realty</p>
      <div className="mt-3 flex justify-center text-xl sm:text-2xl">
        <PhoneWithText />
      </div>
      <div className="mt-1 flex justify-center">
        <EmailAddress />
      </div>
      <div className="mt-4 flex items-center justify-center gap-3">
        <IconAgentBadge size={140} />
        <p className="text-base font-semibold text-navy">eXp Realty ICON Agent</p>
      </div>
    </div>
  );
}
