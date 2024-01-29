import { FormWrapper } from "./form-wrapper"
type AddressData = {
    address: string;
}

type AddressFormProps = AddressData & {
    updateFields: (fields: Partial<AddressData>) => void;
}
export const AddressForm = ({ address, updateFields }: AddressFormProps) => {
    return (
        <FormWrapper title="Address">
            <label htmlFor="address">Address</label>
            <input autoFocus required type="text" id="address" name="address" value={address} onChange={(e) => updateFields({ address: e.target.value })} />
        </FormWrapper>
    )

}