import { useRouter } from "next/router";
import React, { useContext, useState } from "react";

interface ILayoutContextState {
  homeRoute: { [k: string]: string } | null;
}

const defaultState: ILayoutContextState = {
  homeRoute: null,
};

const LayoutContext = React.createContext(defaultState);

interface LayoutContextProviderProps {
  homeRoute?: { [k: string]: string };
}

export const LayoutContextProvider: React.FC<LayoutContextProviderProps> = (
  props
) => {
  const [logoShown, setLogoShown] = useState(false);

  const { children, ...rest } = props;
  return (
    <LayoutContext.Provider
      value={{
        ...defaultState,

        ...rest,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayoutContext = () => {
  return useContext(LayoutContext);
};

export const useHomeRoute = () => {
  const { homeRoute } = useLayoutContext();
  const { locale: currentLocale, defaultLocale } = useRouter();

  const parseRoute = (href: string, locale?: string) => {
    const linkLocale = locale || currentLocale;
    const isDefaultLocale = linkLocale === defaultLocale;
    const homeLink =
      homeRoute && homeRoute[isDefaultLocale ? "slug" : `slug_${linkLocale}`];
    const isHomeLink = `/${homeLink}` === href;
    return isHomeLink ? "/" : href;
  };

  return { homeRoute, parseRoute };
};
