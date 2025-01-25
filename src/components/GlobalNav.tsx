"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import clsx from "clsx";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Item, navItems, profile } from "@/lib/constants";
import { getIcon } from "./icons/react_icon";

export default function GlobalNav() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
    <div className="fixed top-0 z-20 flex w-full flex-col border-b border-gray-800 bg-black lg:bottom-0 lg:z-auto lg:w-72 lg:border-b-0 lg:border-r lg:border-gray-800">
      <div className="flex h-14 items-center px-4 py-7 lg:h-auto">
        <Link
          href="/"
          className="group flex w-full items-center gap-x-2.5"
          onClick={close}
        >
          <div className="h-7 w-7 rounded-full text-xl text-white bg-blue-600 flex items-center justify-center">
            B
          </div>

          <h3 className="font-semibold tracking-wide text-gray-400 group-hover:text-gray-50">
            Blogi
          </h3>
        </Link>
      </div>
      <button
        type="button"
        className="group absolute right-0 top-0 flex h-14 items-center gap-x-2 px-4 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="font-medium text-gray-100 group-hover:text-gray-400">
          Menu
        </div>
        {isOpen ? (
          <FaTimes className="block w-6 text-gray-400" />
        ) : (
          <FaBars className="block w-6 text-gray-400" />
        )}
      </button>

      <div
        className={clsx("overflow-y-auto lg:static lg:block", {
          "fixed inset-x-0 bottom-0 top-14 mt-px bg-black": isOpen,
          hidden: !isOpen,
        })}
      >
        <nav className="space-y-6 px-2 pt-5 flex flex-col justify-between min-h-[540px]">
          <div className="space-y-2">
            {navItems.map((item) => (
              <GlobalNavItem key={item.slug} item={item} close={close} />
            ))}
          </div>
          <div className="space-y-1 mt-auto">
            {profile.map((item) => (
              <GlobalNavItem key={item.slug} item={item} close={close} />
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
}

function GlobalNavItem({
  item,
  close,
}: {
  item: Item;
  close: () => false | void;
}) {
  const segment = useSelectedLayoutSegment();
  const isActive = item.slug === segment;
  const icon = getIcon(item.name.toLowerCase());
  return (
    <Link
      onClick={close}
      href={`/${item.slug}`}
      className={clsx(
        "rounded-md px-3 py-2 text-sm lg:text-base font-medium hover:text-gray-300 flex items-center space-x-2",
        {
          "text-gray-400 hover:bg-gray-800": !isActive,
          "text-white": isActive,
        }
      )}
    >
      <span>{icon}</span>
      <span> {item.name}</span>
    </Link>
  );
}
