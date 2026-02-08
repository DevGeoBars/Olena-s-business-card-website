import {type FunctionComponent } from "react";

import {About, Contacts, Mosaic, Paintings, Teaching, WallPaintings, Welcome} from "@/sections";
import {useLocalization} from "@/providers";
import type {ILinkItem} from "@/model-views";


export const useSections = () => {

  const { translate } = useLocalization();

  const WELCOME_CONFIG =  { id: 'welcome', caption: translate('menu.welcome') as string, Component: Welcome };
  const ABOUT_SECTION_CONFIG = { id: 'about', caption: translate('menu.about') as string, Component: About };
  const GALLERY_MAIN_SECTION_CONFIG =  { id: 'paintings', caption: translate('menu.gallery') as string, Component: Paintings }; // todo@bars подумать об обертке
  const PAINTINGS_SECTION_CONFIG =  { id: 'paintings', caption: translate('menu.paintings') as string, Component: Paintings };
  const WALL_PAINTINGS_SECTION_CONFIG =    { id: 'wallPaintings', caption: translate('menu.wallPaintings') as string, Component: WallPaintings };
  const MOSAIC_PAINTINGS_SECTION_CONFIG =   { id: 'mosaic', caption: translate('menu.mosaic') as string, Component: Mosaic };
  const TEACHING_PAINTINGS_SECTION_CONFIG =   { id: 'teaching', caption: translate('menu.teaching') as string, Component: Teaching };
  const CONTACTS_SECTION_CONFIG =  { id: 'contacts', caption: translate('menu.contacts') as string, Component: Contacts };

  const homeSectionsConfig: Array<ISection> = [
    WELCOME_CONFIG,
    ABOUT_SECTION_CONFIG,
  ];


  const gallerySectionsConfig: Array<ISection> = [
    PAINTINGS_SECTION_CONFIG,
    WALL_PAINTINGS_SECTION_CONFIG,
    MOSAIC_PAINTINGS_SECTION_CONFIG,
    TEACHING_PAINTINGS_SECTION_CONFIG,
  ];


  const homeSections = homeSectionsConfig.map(({Component , caption, id}) => {
    return <Component key={id} id={id} caption={caption}  className="section" />;
  });

  const gallerySections = gallerySectionsConfig.map(({Component , caption, id}) => {
    return <Component key={id} id={id} caption={caption}  className="section" />;
  })

  const contactSection = (
    <CONTACTS_SECTION_CONFIG.Component
      key={CONTACTS_SECTION_CONFIG.id}
      id={CONTACTS_SECTION_CONFIG.id}
      caption={CONTACTS_SECTION_CONFIG.caption}
      className="section"
    />
  );



  const galleryMenuItems = [ABOUT_SECTION_CONFIG, ...gallerySectionsConfig, CONTACTS_SECTION_CONFIG].map(createMenuItem);
  const homeMenuItems = [ABOUT_SECTION_CONFIG,  GALLERY_MAIN_SECTION_CONFIG, CONTACTS_SECTION_CONFIG].map(createMenuItem);


  return {
    galleryMenuItems,
    homeMenuItems,
/** разделить на двыа хукаа для получения конфига и для получения айтемсов (константы конфигов вынести) **/
    homeSections,
    gallerySections,
    contactSection
  }
}

const createMenuItem = ({id, caption}: ISection): ILinkItem => ({
  id,
  caption,
  href: `#${id}`
});

interface ISection {
  id: string;
  caption: string;
  Component: FunctionComponent<any>; //todo@bars обернуть сперва в компоненту секции что бы тип можно было задать один
} //todo@bars добавить тип секции