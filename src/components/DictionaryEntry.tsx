type DictionaryEntryProps = {
  className?: string;
};

const DictionaryEntry = ({ className = "" }: DictionaryEntryProps) => {
  return (
    <div className={`rounded-2xl border border-primary/10 bg-background/55 p-4 md:p-5 ${className}`}>
      <p className="text-[10px] font-sans uppercase tracking-[0.28em] text-primary/40 font-semibold">
        definition
      </p>

      <div className="mt-2 flex items-start gap-2.5">
        <img
          src="/images/magnifying-glass.svg"
          alt=""
          aria-hidden="true"
          className="mt-1.5 w-7 h-7 select-none pointer-events-none"
        />
        <div className="min-w-0 text-left">
          <h3 className="font-sans text-base md:text-lg text-foreground/75 font-semibold">
            management engineering
          </h3>
          <p className="mt-1 text-[11px] font-sans text-primary/45 tracking-wide">
            [man-ij-muhnt en-juh-neer-ing] • noun
          </p>
        </div>
      </div>

      <p className="mt-3 ml-3 text-sm font-sans text-foreground/55 leading-relaxed">
        A multidisciplinary field combining software engineering, business, and data to design and
        optimize systems.
      </p>
    </div>
  );
};

export default DictionaryEntry;
