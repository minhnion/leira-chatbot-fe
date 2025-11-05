// import Logos from "../logos";

export function Footer() {

  return (
    <footer className="w-full flex flex-col md:flex-row md:items-center px-6 gap-4 md:gap-x-6 py-4">
      <div className="border-b border-gray-200 pb-2 md:pb-0 md:border-b-0 md:border-r md:border-gray-200 md:pr-6 shrink-0 h-12 flex items-center justify-start">
        <h4 className="font-medium text-sm whitespace-nowrap text-left ">
          Nhà tài trợ
        </h4>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex gap-4 items-center">
          {/* <Logos.USLogo />
          <Logos.VNLogo /> */}
        </div>

        <div className="flex gap-4 items-center">
          {/* <Logos.USMLogo />
          <Logos.BMHospitalLogo />
          <Logos.VinUniLogo />
          <Logos.AI4LifeLogo />
          <Logos.HCMUSLogo />
          <Logos.HILogo /> */}
        </div>
      </div>
    </footer>
  );
}
