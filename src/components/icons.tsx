type IconProps = { className?: string };

export function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.200 8.200 0 0 1-4.200-1.150l-.3-.18-3 .78.800-2.900-.2-.300A8.200 8.200 0 1 1 12 20.200Zm4.500-6.100c-.25-.120-1.460-.720-1.690-.800-.230-.080-.390-.120-.560.120-.160.250-.640.800-.780.970-.140.160-.290.180-.530.060a6.700 6.700 0 0 1-1.980-1.220 7.400 7.400 0 0 1-1.370-1.700c-.140-.250-.020-.380.110-.500.110-.110.250-.290.370-.430.120-.140.160-.250.250-.410.080-.160.040-.310-.020-.430-.060-.120-.560-1.340-.760-1.840-.200-.480-.410-.420-.560-.420h-.480a.920.920 0 0 0-.660.310 2.800 2.800 0 0 0-.870 2.070c0 1.220.890 2.400 1.010 2.560.120.160 1.750 2.670 4.240 3.740.590.260 1.050.410 1.410.520.590.190 1.130.160 1.560.100.480-.070 1.460-.600 1.670-1.170.200-.580.200-1.070.140-1.170-.060-.110-.220-.170-.470-.290Z" />
    </svg>
  );
}

export function Sparkle({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 0c.6 6.800 5.200 11.400 12 12-6.800.6-11.400 5.200-12 12-.6-6.800-5.200-11.400-12-12C6.800 11.400 11.400 6.800 12 0Z" />
    </svg>
  );
}

export function ArrowRight({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 12" className={className} fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
      <path d="M0 6h30M25 1l5 5-5 5" />
    </svg>
  );
}
