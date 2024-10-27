import Image from "next/image";

const PayAsYouGo: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4">
            Pay As You Go <br /> Custom Web Design
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Experience exceptional personalised website design tailored to fit
            your distinct requirements at a budget-friendly rate with our Pay As
            You Go plan. No hefty initial upfront cost required.
          </p>
          <div className="flex justify-center md:justify-start gap-8">
            <div className="text-center">
              <p className="text-5xl font-bold text-blue-600">95%</p>
              <p className="text-gray-600">Less Upfront Cost</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-blue-600">3.7x</p>
              <p className="text-gray-600">Faster Return on Investment</p>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <Image
            src="/images/bonsai.png"
            alt="Bonsai"
            width={300}
            height={300}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default PayAsYouGo;
