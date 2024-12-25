import { useQuery, UseQueryResult } from "@tanstack/react-query"
import axios from "axios";

import { useReduxSelector } from "@/hooks/useRedux";


type FlayerFeatures = {
  phone: UseQueryResult
}

export const useFlayerFeature = (): FlayerFeatures => {

  const { sign_in } =
    useReduxSelector(({ auth }) => auth);
    
  const phone = useQuery({
    queryKey: ["phone"],
    queryFn: async () => {
      const data = await axios({
        url: `https://api.visitca.uz/v1/customer/by-phone?phone=%2B${sign_in.number}`,
      });

      return data.status;
    }
  });

  return {
    phone,
  }
}