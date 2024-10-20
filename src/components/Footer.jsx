import { useEffect } from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  
  useEffect(() => {
    const script = document.createElement("script");
    script.innerHTML = `
      (function(e,t,o,n,p,r,i){
        e.visitorGlobalObjectAlias=n;
        e[e.visitorGlobalObjectAlias]=e[e.visitorGlobalObjectAlias]||function(){
          (e[e.visitorGlobalObjectAlias].q=e[e.visitorGlobalObjectAlias].q||[]).push(arguments)
        };
        e[e.visitorGlobalObjectAlias].l=(new Date).getTime();
        r=t.createElement("script");
        r.src=o;
        r.async=true;
        i=t.getElementsByTagName("script")[0];
        i.parentNode.insertBefore(r,i)
      })(window,document,"https://diffuser-cdn.app-us1.com/diffuser/diffuser.js","vgo");

      vgo('setAccount', '802171191');
      vgo('setTrackByDefault', true);
      vgo('process');
    `;
    document.body.appendChild(script);

    // Clean up the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="footer w-auto h-auto">
      <div className="cert--container w-auto h-auto">
        <img src="/images/Advanced-QB-Online.png" alt="Advanced QB Online" />
        <img src="/images/Gold-Tier-Badge.png" alt="Gold Tier Badge" />
        <img src="/images/QB-Payroll.png" alt="QB Payroll" />
      </div>
      <p>&copy; {currentYear} Keyes and Associates. All rights reserved.</p>
      {/* <p><a href="/privacy-policy">Privacy Policy</a> | <a href="/terms-of-service">Terms of Service</a></p> */}
    </section>
  );
}

export default Footer;
