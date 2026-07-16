"use client";


import { useState } from "react";
import { X, Plus } from "lucide-react";
import {Button} from "@/components/ui/button"
import { Dialog, DialogPanel } from "@headlessui/react";
import Filter from "./filter";
import { relative } from "path";
import IconButton from "@/components/ui/icon-button";

interface MobileFilterProps {
  sizes:  [];
  colors: [];
}

const MobileFilter: React.FC<MobileFilterProps> = ({
  sizes,
  colors,
}) => {

  const [open, setOpen] = useState(false);
  const onOpen = () => setOpen(true)
  const onClose = () => setOpen(false)

return (
  <>
    <Button
      onClick={onOpen}
      className="flex items-center gap-x-2 bg-black"
    >
      Filter
      <Plus size={20} />
    </Button>

    <Dialog
      as="div"
      className="relative z-40 "
      open={open}
      onClose={onClose}
    >
      {/* Background */}
      <div className="fixed inset-0 bg-black/25" />

      {/* DIlog position */}
      <div className="flxed inset-0 z-40 flex">
         <DialogPanel className= "relative ml-auto flex h-full w-full h-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
           
           {/* Dilog Position */}
           <div className="flex items-center justify-end px-4">
            <IconButton icons={<X size={15} />} onClick={onClose} />
           </div>

           {/* Render the filters */}
           <div className="p-4">
              <Filter
              valueKey="SizeId"
              name= "sizes"
              data= {sizes}>
              </Filter>
              <Filter
              valueKey="ColorId"
              name= "Colors"
              data= {colors}>
              </Filter>
           </div>
         </DialogPanel>
      </div>
    </Dialog>
  </>
);
};

export default MobileFilter;