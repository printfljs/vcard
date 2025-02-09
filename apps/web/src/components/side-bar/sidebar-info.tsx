import React from 'react';
import InfoMoreButton from './info-more-button';
import Image from 'next/image';
import { useResponsiveImageSize } from '@/hooks/use-responsive-image-size';
import { breakpoints } from '@/lib/constants';
import {Locale} from '@/i18n/config';
import {setUserLocale} from '@/services/locale';
import {useTransition} from 'react';
import {useTranslations} from 'next-intl';


import "@/styles/side-bar/sidebar-info.css";

interface SideBarInfoProps {
  onToggle: () => void;
  avatar: string;
  firstName: string;
  lastName: string;
  middleName: string;
  preferredName: string;
  status: string;
}

function SideBarInfo({
  onToggle,
  avatar,
  firstName,
  lastName,
  middleName,
  preferredName,
  status,
}: SideBarInfoProps) {
  const imageSize = useResponsiveImageSize(breakpoints);
  const [isPending, startTransition] = useTransition();
  const t = useTranslations('contact');
  

  const toggleLanguage = async (value: String) => {
    const locale = value as Locale;
    startTransition(() => {
       setUserLocale(locale);
    });
  };

  return (
    <div className="sidebar-info">
      <figure className="avatar-box">
        <Image
          id={`${firstName}  ${lastName}`}
          src={avatar}
          alt={`${firstName} ${lastName}`}
          width={imageSize.width}
          height={imageSize.height}
          quality={50}
          loading="eager"
          priority
        />
      </figure>
      <div className="info-content">
        <h1 className="name" title={`${firstName} ${lastName}`}>
          {t("fullname")}
          <span 
            className="language-toggle text-sm ml-2 text-blue-500 hover:underline cursor-pointer" 
            onClick={() => toggleLanguage('zh')}
          >
            中文
          </span>
          <span className="mx-1 text-sm">/</span>
          <span 
            className="language-toggle text-sm text-blue-500 hover:underline cursor-pointer" 
            onClick={() => toggleLanguage('en')}
          >
            en
          </span>
        </h1>
        
        <p className="text-white-1 bg-onyx text-xs font-light max-w-max rounded-[8px] custom-lg:m-auto px-[12px] py-[3px] md:px-[18px] md:py-[5px]">
          <strong>{status}</strong>
        </p>
      </div>
      <InfoMoreButton onClick={onToggle} />
    </div>
  );
};

export default SideBarInfo;
