import React, { memo } from 'react';
import {translate} from '@docusaurus/Translate';
import {PageMetadata} from '@docusaurus/theme-common';
import Layout from '@theme/Layout';
import NotFoundContent from '@theme/NotFound/Content';

function Index() {
  const title = translate({
    id: 'theme.NotFound.title',
    message: 'Sahifa mavjud emas',
  });
  return (
    <>
      <PageMetadata title={title} />
      <Layout>
        <NotFoundContent />
      </Layout>
    </>
  );
}

export default memo(Index);
