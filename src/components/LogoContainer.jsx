function LogoContainer({ isMobile }) {
  if (isMobile) {
    return null;
  }
  return (
    <section className="logo--container">
      <img
        className="logo w-auto"
        src="/images/logo.svg"
        alt="Company Logo"
      />
    </section>
  );
}

export default LogoContainer;
