import { PrismicRichText } from "@prismicio/react"

/**
 * @typedef {import("@prismicio/client").Content.EmbedSectionSlice} EmbedSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<EmbedSectionSlice>} EmbedSectionProps
 * @param {EmbedSectionProps}
 */
const backgroundColor = {
  Grey: 'bg-grey',
  Green: 'bg-greenGrey',
}

const EmbedSection = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className={`grid justify-center items-center text-center w-screen h-screen ${slice.primary.background_color ? backgroundColor[slice.primary.background_color] : backgroundColor.Grey}`}>
        <div className="container gap-8 flex flex-col items-center">
          <PrismicRichText field={slice.primary.text} />
          <div dangerouslySetInnerHTML={{ __html: slice.primary.embed.html }} />
        </div>
      </div>
    </section>
  );
};

export default EmbedSection;
