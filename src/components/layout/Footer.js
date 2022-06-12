const Footer = () => {
  const footerYear = new Date().getFullYear()
  return (
    <footer className='flex flex-col bg-base-200 text-primary-content mx-auto items-center w-full p-10 space-y-5'>
      <a
        href='https://github.com/EchoChunyuShih/simple-calculator'
        target='_blank'
        className='cursor:pointer'
      >
        <span className='hover:text-pink-500 transition duration-500 ease-out hover:ease-in-out'>
          &#60; Source / &#62;
        </span>
      </a>
      <div> &copy; {footerYear} Built with React & Tailwind &#9829; </div>
    </footer>
  )
}

export default Footer
