// components/Breadcrumb.js
"use client";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BCEllipsis = ({ array }) => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center gap-1">
          <BreadcrumbEllipsis className="h-4 w-4" />
          <span className="sr-only">Toggle menu</span>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          {array?.map((item, index) => (
            <DropdownMenuItem key={index}>
              <Link
                href={`/${array.slice(0, index + 1).join("/")}`}
                className={`capitalize`}
              >
                {item}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <BreadcrumbSeparator />
    </>
  );
};

const Breadcrumbs = () => {
  const pathArray = usePathname()
    .split("/")
    .filter((path) => path);
  const lastPath = pathArray.pop();

  const BCItem = ({ path, index }) => {
    return (
      <>
        <BreadcrumbItem>
          <Link
            href={`/${pathArray.slice(0, index + 1).join("/")}`}
            className={`capitalize`}
          >
            {path}
          </Link>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
      </>
    );
  };

  return (
    <>
      <Breadcrumb className={`mx-8 py-10`}>
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link href="/" className={`capitalize`}>
              utils
            </Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator className={`text-lime-500 `} />
          {pathArray.length < 4 &&
            pathArray.map((path, index) => (
              <BCItem path={path} key={index} index={index} />
            ))}

          {pathArray.length >= 4 && <BCEllipsis array={pathArray} />}

          {lastPath && (
            <BreadcrumbItem>
              <BreadcrumbPage className={`capitalize`}>
                {lastPath}
              </BreadcrumbPage>
            </BreadcrumbItem>
          )}
        </BreadcrumbList>
      </Breadcrumb>
    </>
  );
};

export default Breadcrumbs;
