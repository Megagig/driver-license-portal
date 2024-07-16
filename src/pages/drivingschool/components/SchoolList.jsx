import { features } from '../constants';

const SchoolList = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          List Of Accredited Driving{' '}
          <span className="bg-gradient-to-r from-green-500 to-green-800 text-transparent bg-clip-text">
            Schools
          </span>
        </h2>
      </div>
      <div className="mt-10 lg:mt-20 overflow-x-auto">
        <table className="w-full text-center">
          <thead>
            <tr>
              <th className="px-4 py-2">State</th>
              <th className="px-4 py-2">Driving School</th>
              <th className="px-4 py-2">Address</th>
            </tr>
          </thead>
          <tbody>
            {features.map((feature, index) => (
              <tr key={index} className="border-b">
                <td className="px-4 py-2">{feature.state}</td>
                <td className="px-4 py-2">{feature.school}</td>
                <td className="px-4 py-2">{feature.Address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SchoolList;
