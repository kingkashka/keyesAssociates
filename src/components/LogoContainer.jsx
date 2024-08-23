function LogoContainer({ isMobile }) {
  if (isMobile) {
    return null;
  }
  return (
    <section className="logo--container">
      <img
        className="logo w-auto"
        src="/images/logo.png"
        alt="Company Logo"
      />
    </section>
  );
}

export default LogoContainer;
