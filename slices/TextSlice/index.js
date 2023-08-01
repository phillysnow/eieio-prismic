import { PrismicRichText } from '@prismicio/react'
import Button from '@/components/Button'

/**
 * @typedef {import("@prismicio/client").Content.TextSliceSlice} TextSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TextSliceSlice>} TextSliceProps
 * @param {TextSliceProps}
 */

const backgroundColor = {
  Grey: 'bg-grey',
  Green: 'bg-greenGrey',
}

const TextSlice = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className={`py-24 gap-16 inline-flex flex-col items-center w-screen ${slice.primary.text_align || 'text-center'} ${slice.primary.background_color ? backgroundColor[slice.primary.background_color] : backgroundColor.Grey}`}>
        <div className="container gap-6 flex flex-col items-center">
          <PrismicRichText field={slice.primary.text_field} />
          {slice.variation === 'callToActionButton' && (
            <Button link={slice.primary.button_link} label={slice.primary.button_label} />
          )}
        </div>
      </div>
    </section>
  );
};

export default TextSlice;
