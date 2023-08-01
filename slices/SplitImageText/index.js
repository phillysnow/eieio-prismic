import { PrismicRichText } from "@prismicio/react"
import { PrismicNextImage } from "@prismicio/next"
import Button from "@/components/Button"
/**
 * @typedef {import("@prismicio/client").Content.SplitImageTextSlice} SplitImageTextSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SplitImageTextSlice>} SplitImageTextProps
 * @param {SplitImageTextProps}
 */
const backgroundColor = {
  Grey: 'bg-grey',
  Green: 'bg-greenGrey',
}

const SplitImageText = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className={`${slice.variation === "heroSection" ? 'pt-12 pb-24' : ''} flex justify-center items-center w-screen ${slice.primary.background_color ? backgroundColor[slice.primary.background_color] : backgroundColor.Grey}`}>
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-24 items-center min-h-[512px] py-24">
          <PrismicNextImage field={slice.primary.image}
            className={`w-full h-auto rounded-3xl ${['default', 'splitButtonRight'].includes(slice.variation) ? '' : 'md:order-last'}`.trim()} />
          <div className="flex flex-col gap-4 items-start">
            {["heroSection"].includes(slice.variation) ?
              <>
                <PrismicRichText field={slice.primary.title} />
                <PrismicRichText field={slice.primary.paragraph} />
              </> :
              <PrismicRichText field={slice.primary.text} />
            }
            {
              ["splitButtonLeft", "splitButtonRight", "heroSection"].includes(slice.variation) &&
              <Button link={slice.primary.button_link} label={slice.primary.button_label} />
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default SplitImageText;
