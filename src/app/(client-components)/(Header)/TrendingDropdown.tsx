import { Popover, Tab, Transition } from "@headlessui/react";
import {
  TicketIcon,
  GlobeAltIcon,
  ChevronDownIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { FC, Fragment } from "react";
import { headerCities } from "./CurrencyDropdown";

export const headerEvents = [
  {
    id: "MCircus",
    name: "Mumbai Circus",
    description: "",
    href: "##",
    active: true,
  },
  {
    id: "Neon",
    name: "Neon Party",
    description: "",
    href: "##",
  },
  {
    id: "Neon",
    name: "Mumbai Circus",
    description: "",
    href: "##",
  },
];

interface LangDropdownProps {
  panelClassName?: string;
  className?: string;
}

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const TrendingEventCityDropdown: FC<LangDropdownProps> = ({
  panelClassName = "top-full right-0 max-w-sm w-96",
  className = "hidden md:flex",
}) => {
  const renderEvents = (close: () => void) => {
    return (
      <div className="grid gap-8 lg:grid-cols-2">
        {headerEvents.map((item, index) => (
          <a
            key={index}
            href={item.href}
            onClick={() => close()}
            className={`flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50 ${
              item.active ? "bg-gray-100 dark:bg-gray-700" : "opacity-80"
            }`}
          >
            <div className="">
              <p className="text-sm font-medium ">{item.name}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {item.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    );
  };

  const renderCities = (close: () => void) => {
    return (
      <div className="grid gap-7 lg:grid-cols-2">
        {headerCities.map((item, index) => (
          <a
            key={index}
            href={item.href}
            onClick={() => close()}
            className={`flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50 ${
              item.active ? "bg-gray-100 dark:bg-gray-700" : "opacity-80"
            }`}
          >
            <div className="">
              <p className="text-sm font-medium ">{item.name}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {item.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    );
  };

  return (
    <>
      <Popover className={`LangDropdown relative ${className}`}>
        {({ open, close }) => (
          <>
            <Popover.Button
              className={`
                ${open ? "" : "text-opacity-80"}
             group self-center h-10 sm:h-12 px-3 py-1.5 inline-flex items-center text-sm text-gray-800 dark:text-neutral-200 font-medium hover:text-opacity-100 focus:outline-none `}
            >
              <TicketIcon className="w-5 h-5 opacity-80" />
              <span className="mx-1">/</span>
              <MapPinIcon className="w-5 h-5 opacity-80" />

              <ChevronDownIcon
                className={`${open ? "-rotate-180" : "text-opacity-70"}
                  ml-1 h-4 w-4  group-hover:text-opacity-80 transition ease-in-out duration-150`}
                aria-hidden="true"
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className={`absolute z-20  ${panelClassName}`}>
                <div className="p-3 sm:p-6 rounded-2xl bg-white dark:bg-neutral-800 shadow-lg ring-1 ring-black ring-opacity-5">
                  <Tab.Group>
                    <Tab.List className="flex space-x-1 rounded-full bg-gray-100 dark:bg-slate-700 p-1">
                      {["Trending Events", "Trending Cities"].map(
                        (category) => (
                          <Tab
                            key={category}
                            className={({ selected }) =>
                              classNames(
                                "w-full rounded-full py-2 text-xs font-medium leading-5 text-gray-700",
                                "focus:outline-none focus:ring-0",
                                selected
                                  ? "bg-white shadow"
                                  : "text-gray-700 dark:text-slate-300 hover:bg-white/70 dark:hover:bg-slate-900/40"
                              )
                            }
                          >
                            {category}
                          </Tab>
                        )
                      )}
                    </Tab.List>
                    <Tab.Panels className="mt-5">
                      <Tab.Panel
                        className={classNames(
                          "rounded-xl p-3",
                          "focus:outline-none focus:ring-0"
                        )}
                      >
                        {renderEvents(close)}
                      </Tab.Panel>
                      <Tab.Panel
                        className={classNames(
                          "rounded-xl p-3",
                          "focus:outline-none focus:ring-0"
                        )}
                      >
                        {renderCities(close)}
                      </Tab.Panel>
                    </Tab.Panels>
                  </Tab.Group>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </>
  );
};
export default TrendingEventCityDropdown;
