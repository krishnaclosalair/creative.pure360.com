import Link from "next/link";
import client from "../../client-config";
import groq from "groq";
import BlockContent from "@sanity/block-content-to-react";
import { urlFor } from "../../utils/image-url";
import { motion } from "framer-motion";
import { childrenVariants, parentVariants } from "../../variants/variants";

const Category = ({ category }) => {
  const [{ title, description, icon, products }] = category;
  return (
    <motion.div variants={parentVariants} initial="hidden" animate="visible">
      <section className="grid gap-2 sm:gap-10 grid-cols-1 sm:grid-cols-3 mb-16 items-center">
        <motion.article
          variants={childrenVariants}
          className="col-span-1 mx-auto mb-8 sm:mb-0 bg-contain bg-no-repeat bg-center w-full h-fu pt-50p sm:pt-100p"
          style={{
            backgroundImage: `url(${urlFor(icon)})`,
          }}
        ></motion.article>
        <motion.article
          variants={childrenVariants}
          className="col-span-1 sm:col-span-2"
        >
          <h1 className="font-avant-garde-bold text-3xl sm:text-5xl leading-10 sm:leading-14 mt-2 mb-4 sm:mb-8">
            {title}
          </h1>
          <BlockContent blocks={description} />
        </motion.article>
      </section>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {products.map(({ id, name, exerpt, type, slug }) => (
          <motion.article
            variants={childrenVariants}
            key={id}
            className="border-gray-50 border-4 rounded-lg p-8 m-2"
          >
            <span className="text-floss-pink uppercase pb-2 text-xs mb-2">
              {type}
            </span>
            <h3 className="font-avant-garde-bold text-2xl sm:text-3xl mb-3">
              {name}
            </h3>
            <BlockContent blocks={exerpt} />
            <Link href={`/products/${slug}`}>
              <a className="text-base text-white hover:text-pavilion-purple bg-pavilion-purple hover:bg-white hover:shadow-full inline-block px-8 py-2 mt-6">
                Learn more
              </a>
            </Link>
          </motion.article>
        ))}
      </section>
    </motion.div>
  );
};

export const getStaticPaths = async () => {
  const categories = await client.fetch(
    groq`*[_type == 'category']{
      "slug": slug.current,
      "id": _id,
    }`
  );
  const paths = categories.map((category) => ({
    params: { slug: category.slug },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const category = await client.fetch(
    groq`*[_type == 'category' && slug.current == "${params.slug}"]
    {
        title, 
        description,
        icon,
        "products": *[_type=='product' && references(^._id)] | order(name) { 
          "id": _id,
          name,
          description,
          exerpt,
          "type": productType->name,
          "slug": slug.current,
        }
    }`
  );
  return {
    props: { category },
    revalidate: 1,
  };
};

export default Category;
