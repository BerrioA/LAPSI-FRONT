import { Accordion, AccordionItem } from "@heroui/react";

export const AccordionComponent = ({ description }) => {
  return (
    <Accordion isCompact>
      <AccordionItem key="1" aria-label="Accordion 1" title="Más información">
        {description}
      </AccordionItem>
    </Accordion>
  );
};
