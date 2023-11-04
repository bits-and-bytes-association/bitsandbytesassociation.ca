import { useMediaQuery } from 'react-responsive';

const iframeAttrs = {
  style: { borderWidth: 0 },
  width: '800',
  height: '600',
  frameBorder: '0',
  scrolling: 'no',
};

export default function GoogleCalendarEmbed({ src }) {
  const isDesktop = useMediaQuery({ minWidth: 768 }); // md breakpoint

  return (
    <div className="relative h-0 overflow-hidden pt-0 pb-[100%] md:pb-[70%]">
      <iframe
        src={`https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FWinnipeg&mode=${
          isDesktop ? 'MONTH' : 'AGENDA'
        }&showCalendars=0&showTabs=0&showPrint=0&showNav=1&showTitle=0&src=${src}&color=%236365cc`}
        className="absolute top-0 left-0 h-full w-full"
        {...iframeAttrs}
      ></iframe>
    </div>
  );
}
