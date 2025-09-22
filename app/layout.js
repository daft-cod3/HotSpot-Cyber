import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import './globals.css';

export default function Layout({children}){
  return(
    <html lang="en">
      <meta name="viewport"content="width=device-width, initial-scale=1.0"/>
      <body>
        <NavBar/>
        <main className="min-h-screen">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  )
}
