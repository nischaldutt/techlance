export { default as useSignup } from "@/hooks/auth/useSignup";

// customer
export { default as useCategories } from "@/hooks/customer/categories/useCategories";
export { default as useSubCategories } from "@/hooks/customer/subCategories/useSubCategories";
export { default as useSubCategoriesWithCategoryId } from "@/hooks/customer/subCategories/useSubCategoriesWithCategoryId";

export { default as useCreateBookingSchedule } from "@/hooks/customer/bookingRequest/useCreateBookingSchedule";
export { default as useSaveBookingDetails } from "@/hooks/customer/bookingRequest/useSaveBookingDetails";
export { default as useConfirmBooking } from "@/hooks/customer/bookingRequest/useConfirmBooking";

export { default as useAddReview } from "@/hooks/customer/reviews/useAddReview";
export { default as useEditReview } from "@/hooks/customer/reviews/useEditReview";

// business
export { default as useCreateBusinessBasicInfo } from "@/hooks/business/register/useCreateBusinessBasicInfo";
export { default as useCreateBusinessInsurance } from "@/hooks/business/register/useCreateBusinessInsurance";
export { default as useCreateBusinessReferences } from "@/hooks/business/register/useCreateBusinessReferences";
