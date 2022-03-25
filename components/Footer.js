function Footer() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 px-12 sm:px-32 py-14 bg-gray-100 dark:bg-gray-700 text-gray-600">
      <div className="space-y-4 text-sm text-gray-800 dark:text-gray-100">
        <h5 className="font-bold">ABOUT</h5>
        <p>How Airbnb works</p>
      </div>
      <div className="space-y-4 text-sm text-gray-800 dark:text-gray-100">
        <h5 className="font-bold">COMMUNITY</h5>
        <p>Diversity & Belonging</p>
      </div>
      <div className="space-y-4 text-sm text-gray-800 dark:text-gray-100">
        <h5 className="font-bold">Host</h5>
        <p>Host your home</p>
      </div>
      <div className="space-y-4 text-sm text-gray-800 dark:text-gray-100">
        <h5 className="font-bold">SUPPORT</h5>
        <p>Our COVID-19 Response</p>
      </div>
    </div>
  );
}

export default Footer;
