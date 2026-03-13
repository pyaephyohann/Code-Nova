interface Props {
  title: string;
  description: string;
}

const Metadata = ({ title, description }: Props) => {
  return (
    <>
      <title>{title}s</title>
      <meta name="description" content={description} />
    </>
  );
};

export default Metadata;
