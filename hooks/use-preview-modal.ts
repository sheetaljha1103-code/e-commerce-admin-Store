import {create} from "zustand";
import { Product } from "@/public/types";


interface PreviewModalStore {
    isOpen : Boolean;
    data? : Product;
    onOPen: (data:Product) => void;
    onClose: () => void
}

const usePreviewModel = create<PreviewModalStore>((set) => ({
    isOpen : false,
    data : undefined,
    onOPen : (data:Product) => set({data, isOpen: true}),
     onClose : () => set({isOpen: false})
}))

export default usePreviewModel