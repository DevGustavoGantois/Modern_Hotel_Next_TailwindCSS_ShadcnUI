import { 
    Select, 
    SelectContent, 
    SelectGroup, 
    SelectItem, 
    SelectLabel, 
    SelectTrigger, 
    SelectValue 
} from './ui/select';

export function GuestSelect() {
    return (
        <Select>
            <SelectTrigger className="w-full">
                <SelectValue placeholder="Quantos convidados ?" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Convidados</SelectLabel>
                    <SelectItem value='1'>1</SelectItem>
                    <SelectItem value='2'>2</SelectItem>
                    <SelectItem value='3'>3</SelectItem>
                    <SelectItem value='4'>4</SelectItem>
                    <SelectItem value='5'>5</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}
