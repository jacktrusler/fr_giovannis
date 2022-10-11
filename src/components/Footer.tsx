const Footer = () => {
  return (
  <div>
    <div className="flex py-4 justify-center bg-gray-900 w-full border-white">
      <div className="text-white text-lg w-72 mr-4 text-center border-r-4 border-l-4 px-4 border-double">
        <ul>
          {' '}
          <span className="text-2xl">Hours</span>
          <li className="flex justify-between">
            <span>M-F</span> <span>9-5pm</span>
          </li>
          <li className="flex justify-between">
            <span>Saturday</span> <span>9-2pm</span>
          </li>
          <li className="flex justify-between">
            <span>Sunday</span> <span>Closed</span>
          </li>
        </ul>
      </div>
      <div className="text-white text-lg w-72 text-center border-r-4 border-l-4 px-4 border-double">
        <ul>
          {' '}
          <span className="text-2xl">Address</span>
          <li className="flex justify-between">
            <span>343 East Cuyahoga Falls Ave Akron, Ohio 44310</span>
          </li>
        </ul>
      </div>
    </div>
    <div className="w-full bg-gray-900 text-center text-white">Website Designed by <a className="text-blue-200" href="https://jacktrusler.com">Jack</a></div>
  </div>
  );
};

export default Footer;
