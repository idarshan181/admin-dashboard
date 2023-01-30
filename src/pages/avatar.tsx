import Layout from '@/components/Layout';

import Avatar from '@/elements/Avatar';

export default function AvatarPage() {
  return (
    <Layout
      header={false}
      sidebar={true}
      className={`flex max-h-screen flex-col items-center justify-center`}
    >
      <div className="my-auto flex h-full flex-col items-center justify-center gap-6">
        <div className="flex w-[614px] flex-row items-center gap-5 rounded-lg px-6 ring-2">
          <Avatar
            size="XS"
            url="https://lh3.googleusercontent.com/a/AEdFTp7hUWPOOm8p0ucClEFlHMxg0CZd5V7zjCrPRUZWTA=s256-c"
          />
          <Avatar size="SM">DP </Avatar>
          <Avatar />
          <Avatar
            url="https://lh3.googleusercontent.com/a/AEdFTp7hUWPOOm8p0ucClEFlHMxg0CZd5V7zjCrPRUZWTA=s256-c"
            size="LG"
            variant="SQUARED"
          />
          <Avatar size="XL" variant="BORDERED" />
        </div>
      </div>
    </Layout>
  );
}
