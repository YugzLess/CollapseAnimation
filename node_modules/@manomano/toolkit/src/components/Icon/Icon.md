Icon:

- Import component icon with props <b>component</b>.
- You need to import Icon component and IconName.
- Icon was in SVG.
- Open a Merge Request if you need new icon.

  <br />

Import example:

```jsx static
import { Icon, IconAccount } from 'ToolkitPath';

<Icon component={IconAccount} />;
```

```js
import IconAbTest from './Icons/IconAbTest';
import IconAccount from './Icons/IconAccount';
import IconAlertCircle from './Icons/IconAlertCircle';
import IconAnalyse from './Icons/IconAnalyse';
import IconArrowFullDown from './Icons/IconArrowFullDown';
import IconArrowFullLeft from './Icons/IconArrowFullLeft';
import IconArrowFullRight from './Icons/IconArrowFullRight';
import IconArrowFullUp from './Icons/IconArrowFullUp';
import IconAward from './Icons/IconAward';
import IconBankTransfert from './Icons/IconBankTransfert';
import IconBarredEye from './Icons/IconBarredEye';
import IconBasket from './Icons/IconBasket';
import IconBathTub from './Icons/IconBathTub';
import IconBigDrill from './Icons/IconBigDrill';
import IconBox from './Icons/IconBox';
import IconBoxes from './Icons/IconBoxes';
import IconBrush from './Icons/IconBrush';
import IconBurgerMenu from './Icons/IconBurgerMenu';
import IconCalendar from './Icons/IconCalendar';
import IconCamera from './Icons/IconCamera';
import IconCheck from './Icons/IconCheck';
import IconChevronDown from './Icons/IconChevronDown';
import IconChevronLeft from './Icons/IconChevronLeft';
import IconChevronRight from './Icons/IconChevronRight';
import IconChevronUp from './Icons/IconChevronUp';
import IconCircleMinus from './Icons/IconCircleMinus';
import IconCirclePlus from './Icons/IconCirclePlus';
import IconClock from './Icons/IconClock';
import IconClose from './Icons/IconClose';
import IconCloseCircle from './Icons/IconCloseCircle';
import IconContent from './Icons/IconContent';
import IconCreditCard from './Icons/IconCreditCard';
import IconDeliveryForm from './Icons/IconDeliveryForm';
import IconDocument from './Icons/IconDocument';
import IconDotMenu from './Icons/IconDotMenu';
import IconDownload from './Icons/IconDownload';
import IconDragNdrop from './Icons/IconDragNdrop';
import IconDrill from './Icons/IconDrill';
import IconEdit from './Icons/IconEdit';
import IconExtra from './Icons/IconExtra';
import IconEye from './Icons/IconEye';
import IconFacebook from './Icons/IconFacebook';
import IconFaucetWater from './Icons/IconFaucetWater';
import IconFeatureFlag from './Icons/IconFeatureFlag';
import IconFilter from './Icons/IconFilter';
import IconFlash from './Icons/IconFlash';
import IconFreeDelivery from './Icons/IconFreeDelivery';
import IconHeart from './Icons/IconHeart';
import IconHeartFull from './Icons/IconHeartFull';
import IconHelpCircle from './Icons/IconHelpCircle';
import IconHistoricalSearch from './Icons/IconHistoricalSearch';
import IconHood from './Icons/IconHood';
import IconInformationCircle from './Icons/IconInformationCircle';
import IconInstagram from './Icons/IconInstagram';
import IconLabel from './Icons/IconLabel';
import IconLamp from './Icons/IconLamp';
import IconLaunch from './Icons/IconLaunch';
import IconLink from './Icons/IconLink';
import IconLock from './Icons/IconLock';
import IconLogOut from './Icons/IconLogOut';
import IconMail from './Icons/IconMail';
import IconMapPin from './Icons/IconMapPin';
import IconMarketing from './Icons/IconMarketing';
import IconMessage from './Icons/IconMessage';
import IconMessageCircle from './Icons/IconMessageCircle';
import IconPhone from './Icons/IconPhone';
import IconPiggyBank from './Icons/IconPiggyBank';
import IconPinterest from './Icons/IconPinterest';
import IconPlay from './Icons/IconPlay';
import IconPrinter from './Icons/IconPrinter';
import IconProduct from './Icons/IconProduct';
import IconPromo from './Icons/IconPromo';
import IconScrew from './Icons/IconScrew';
import IconSearch from './Icons/IconSearch';
import IconStarEmpty from './Icons/IconStarEmpty';
import IconStarFull from './Icons/IconStarFull';
import IconStop from './Icons/IconStop';
import IconTagPromo from './Icons/IconTagPromo';
import IconThumbDown from './Icons/IconThumbDown';
import IconTrash from './Icons/IconTrash';
import IconTrending from './Icons/IconTrending';
import IconTrucks from './Icons/IconTrucks';
import IconTwitter from './Icons/IconTwitter';
import IconVote from './Icons/IconVote';
import IconWall from './Icons/IconWall';
import IconWateringCan from './Icons/IconWateringCan';
import IconWheel from './Icons/IconWheel';
import IconYoutube from './Icons/IconYoutube';

import IconBelgium from './Icons/IconBelgium';
import IconFrance from './Icons/IconFrance';
import IconGermany from './Icons/IconGermany';
import IconItaly from './Icons/IconItaly';
import IconNetherlands from './Icons/IconNetherlands';
import IconSpain from './Icons/IconSpain';
import IconSwitzerland from './Icons/IconSwitzerland';
import IconUnitedKingdom from './Icons/IconUnitedKingdom';

const icons = [
  { icon: IconAbTest, name: 'IconAbTest' },
  { icon: IconAccount, name: 'IconAccount' },
  { icon: IconAlertCircle, name: 'IconAlertCircle' },
  { icon: IconAnalyse, name: 'IconAnalyse' },
  { icon: IconArrowFullDown, name: 'IconArrowFullDown' },
  { icon: IconArrowFullLeft, name: 'IconArrowFullLeft' },
  { icon: IconArrowFullRight, name: 'IconArrowFullRight' },
  { icon: IconArrowFullUp, name: 'IconArrowFullUp' },
  { icon: IconAward, name: 'IconAward' },
  { icon: IconBankTransfert, name: 'IconBankTransfert' },
  { icon: IconBarredEye, name: 'IconBarredEye' },
  { icon: IconBasket, name: 'IconBasket' },
  { icon: IconBathTub, name: 'IconBathTub' },
  { icon: IconBigDrill, name: 'IconBigDrill' },
  { icon: IconBox, name: 'IconBox' },
  { icon: IconBoxes, name: 'IconBoxes' },
  { icon: IconBrush, name: 'IconBrush' },
  { icon: IconBurgerMenu, name: 'IconBurgerMenu' },
  { icon: IconCalendar, name: 'IconCalendar' },
  { icon: IconCamera, name: 'IconCamera' },
  { icon: IconCheck, name: 'IconCheck' },
  { icon: IconChevronDown, name: 'IconChevronDown' },
  { icon: IconChevronLeft, name: 'IconChevronLeft' },
  { icon: IconChevronRight, name: 'IconChevronRight' },
  { icon: IconChevronUp, name: 'IconChevronUp' },
  { icon: IconCircleMinus, name: 'IconCircleMinus' },
  { icon: IconCirclePlus, name: 'IconCirclePlus' },
  { icon: IconClock, name: 'IconClock' },
  { icon: IconClose, name: 'IconClose' },
  { icon: IconCloseCircle, name: 'IconCloseCircle' },
  { icon: IconContent, name: 'IconContent' },
  { icon: IconCreditCard, name: 'IconCreditCard' },
  { icon: IconDeliveryForm, name: 'IconDeliveryForm' },
  { icon: IconDocument, name: 'IconDocument' },
  { icon: IconDotMenu, name: 'IconDotMenu' },
  { icon: IconDownload, name: 'IconDownload' },
  { icon: IconDragNdrop, name: 'IconDragNdrop' },
  { icon: IconDrill, name: 'IconDrill' },
  { icon: IconEdit, name: 'IconEdit' },
  { icon: IconExtra, name: 'IconExtra' },
  { icon: IconEye, name: 'IconEye' },
  { icon: IconFacebook, name: 'IconFacebook' },
  { icon: IconFaucetWater, name: 'IconFaucetWater' },
  { icon: IconFeatureFlag, name: 'IconFeatureFlag' },
  { icon: IconFilter, name: 'IconFilter' },
  { icon: IconFlash, name: 'IconFlash' },
  { icon: IconFreeDelivery, name: 'IconFreeDelivery' },
  { icon: IconHeart, name: 'IconHeart' },
  { icon: IconHeartFull, name: 'IconHeartFull' },
  { icon: IconHelpCircle, name: 'IconHelpCircle' },
  { icon: IconHistoricalSearch, name: 'IconHistoricalSearch' },
  { icon: IconHood, name: 'IconHood' },
  { icon: IconInformationCircle, name: 'IconInformationCircle' },
  { icon: IconInstagram, name: 'IconInstagram' },
  { icon: IconLabel, name: 'IconLabel' },
  { icon: IconLamp, name: 'IconLamp' },
  { icon: IconLaunch, name: 'IconLaunch' },
  { icon: IconLink, name: 'IconLink' },
  { icon: IconLock, name: 'IconLock' },
  { icon: IconLogOut, name: 'IconLogOut' },
  { icon: IconMail, name: 'IconMail' },
  { icon: IconMapPin, name: 'IconMapPin' },
  { icon: IconMarketing, name: 'IconMarketing' },
  { icon: IconMessage, name: 'IconMessage' },
  { icon: IconMessageCircle, name: 'IconMessageCircle' },
  { icon: IconPhone, name: 'IconPhone' },
  { icon: IconPiggyBank, name: 'IconPiggyBank' },
  { icon: IconPinterest, name: 'IconPinterest' },
  { icon: IconPlay, name: 'IconPlay' },
  { icon: IconPrinter, name: 'IconPrinter' },
  { icon: IconProduct, name: 'IconProduct' },
  { icon: IconPromo, name: 'IconPromo' },
  { icon: IconScrew, name: 'IconScrew' },
  { icon: IconSearch, name: 'IconSearch' },
  { icon: IconStarEmpty, name: 'IconStarEmpty' },
  { icon: IconStarFull, name: 'IconStarFull' },
  { icon: IconStop, name: 'IconStop' },
  { icon: IconTagPromo, name: 'IconTagPromo' },
  { icon: IconThumbDown, name: 'IconThumbDown' },
  { icon: IconTrash, name: 'IconTrash' },
  { icon: IconTrending, name: 'IconTrending' },
  { icon: IconTrucks, name: 'IconTrucks' },
  { icon: IconTwitter, name: 'IconTwitter' },
  { icon: IconVote, name: 'IconVote' },
  { icon: IconWall, name: 'IconWall' },
  { icon: IconWateringCan, name: 'IconWateringCan' },
  { icon: IconWheel, name: 'IconWheel' },
  { icon: IconYoutube, name: 'IconYoutube' },
  { icon: IconBelgium, name: 'IconBelgium' },
  { icon: IconFrance, name: 'IconFrance' },
  { icon: IconGermany, name: 'IconGermany' },
  { icon: IconItaly, name: 'IconItaly' },
  { icon: IconNetherlands, name: 'IconNetherlands' },
  { icon: IconSpain, name: 'IconSpain' },
  { icon: IconSwitzerland, name: 'IconSwitzerland' },
  { icon: IconUnitedKingdom, name: 'IconUnitedKingdom' },
];

const style = {
  display: 'flex',
  flexFlow: 'column wrap',
  justifyContent: 'center',
  alignItems: 'center',
  width: 140,
  height: 80,
  padding: '.5rem',
  margin: '0 .5rem .5rem 0',
  background: '#e8e8e8',
  border: '1px solid #d4d4d4',
  borderRadius: 3,
};

const span = {
  marginTop: 5,
  fontSize: 12,
  textAlign: 'center',
};

<div
  style={{
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'flex-start',
  }}
>
  {icons.map(({ icon, name }) => (
    <div key={name} style={style}>
      <Icon component={icon} />
      <span style={span}>{name}</span>
    </div>
  ))}
</div>;
```
