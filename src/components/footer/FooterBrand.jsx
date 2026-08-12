function FooterBrand() {
  return (
    <div className="max-w-sm">
      {/* Logo */}
      <a href="#home" className="inline-flex items-center gap-3.5">
        <img src="/logo.png" alt="Logo" className="w-20 h-20 object-contain" />
        <span className="font-bold tracking-wider text-2xl font-display select-none">
          <span className="bg-gradient-to-r from-cyan-400 to-sky-400 bg-clip-text text-transparent">VIVEK</span>
          <span className="text-white hover:text-cyan-400 transition-colors duration-300 ml-2">TIWARI</span>
        </span>
      </a>

      {/* Description */}
      <p className="mt-5 text-sm leading-6 text-slate-500">
        IT Trainer & Full Stack Web Developer
        <br />
        crafting modern digital experiences with
        <br />
        passion and precision.
      </p>
    </div>
  );
}

export default FooterBrand;