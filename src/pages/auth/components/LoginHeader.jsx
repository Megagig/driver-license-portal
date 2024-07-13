import { Link } from 'react-router-dom';

export default function LoginHeader({
  heading,
  paragraph,
  linkName,
  linkUrl = '/signup',
}) {
  return (
    <div className="">
      <div className="flex justify-center">
        <img
          alt=""
          className="h-14 w-14"
          src="./src/assets/images/business.png"
        />
      </div>
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
        {heading}
      </h2>

    </div>
  );
}
