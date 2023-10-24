import { dehydrate, QueryClient } from "@tanstack/react-query";

import { BusinessServiceList, BusinessCreateServiceForm } from "@/components";
import { useServiceCategories, useServicesByBusiness } from "@/hooks";
import { APP_CONSTANTS } from "@/constants";
import { getCategories, getServicesByBusiness } from "@/services";
import Admin from "@/layouts/Admin";

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(
    [APP_CONSTANTS.QUERY_KEYS.BUSINESS.SERVICE_CATEGORIES],
    getCategories
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default function Services() {
  const response = useServiceCategories();
  const { services, isFetching, refetch } = useServicesByBusiness(
    APP_CONSTANTS.DUMMY_BUSINESS_ID
  ); // todo: connect businessId here
  // todo_: service/list/144 is not responding with services, ask to fix

  const categories = response?.map((category) => {
    return {
      value: category?.id,
      label: category?.name,
    };
  });

  return (
    <>
      <div className="grid grid-cols-[repeat(1,_minmax(0,_100%))] xl:grid-cols-[repeat(2,_minmax(0,_100%))] gap-4">
        <BusinessServiceList services={services} isFetching={isFetching} />
        <BusinessCreateServiceForm
          categories={categories}
          refetchServices={refetch}
        />
      </div>
    </>
  );
}

Services.layout = Admin;
