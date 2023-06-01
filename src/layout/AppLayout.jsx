import NavMenu from "./NavMenu";
import Footer from "./Footer";

export default function Layout( {children} ) {

  return (
    <>            
      <NavMenu />
        {children}
      <Footer />
    </>
  )
}