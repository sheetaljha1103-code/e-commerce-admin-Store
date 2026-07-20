"use client";

import { useState } from "react";
import { X, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogPanel } from "@headlessui/react";
import IconButton from "@/components/ui/icon-button";

import Filter from "./filter";

import { Color, Size } from "@/public/types";


interface MobileFilterProps {
  sizes: Size[];
  colors: Color[];
}


const MobileFilter: React.FC<MobileFilterProps> = ({
  sizes,
  colors,
}) => {

  const [open, setOpen] = useState(false);


  const onOpen = () => {
    setOpen(true);
  };


  const onClose = () => {
    setOpen(false);
  };


  return (
    <>
      <Button
        onClick={onOpen}
        className="flex items-center gap-x-2 bg-black text-white"
      >
        Filter
        <Plus size={20} />
      </Button>


      <Dialog
        as="div"
        className="relative z-40"
        open={open}
        onClose={onClose}
      >

        {/* Overlay */}
        <div className="fixed inset-0 bg-black/25" />


        {/* Dialog wrapper */}
        <div className="fixed inset-0 z-40 flex">


          <DialogPanel
            className="
              relative
              ml-auto
              flex
              h-full
              w-full
              max-w-xs
              flex-col
              overflow-y-auto
              bg-white
              py-4
              pb-6
              shadow-xl
            "
          >


            {/* Close button */}
            <div className="flex items-center justify-end px-4">

              <IconButton
                icons={<X size={15} />}
                onClick={onClose}
              />

            </div>



            {/* Filters */}

            <div className="p-4 space-y-6">


              <Filter
                valueKey="sizeId"
                name="Sizes"
                data={sizes}
              />


              <Filter
                valueKey="colorId"
                name="Colors"
                data={colors}
              />


            </div>


          </DialogPanel>


        </div>


      </Dialog>
    </>
  );
};


export default MobileFilter;