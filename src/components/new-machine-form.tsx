'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { MachineType, MaintenanceIntervalUnit } from '@prisma/client';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { newMachineFormSchema } from '@/lib/form-schemas';
import { MachineTypeLabels } from '@/lib/labels';
import { DateFormField, InputFormField } from './ui/form-field';

type NewMachineFormValues = z.infer<typeof newMachineFormSchema>;

export function NewMachineForm() {
  const form = useForm<NewMachineFormValues>({
    resolver: zodResolver(newMachineFormSchema),
    defaultValues: {
      name: '',
      serialNumber: '',
      usageHours: 0,
      lastServiceDt: undefined,
      maintenanceIntervalValue: 0,
      maintenanceIntervalUnit: undefined,
    },
  });

  const onSubmit = async (data: NewMachineFormValues) => {
    try {
      const response = await axios.post('/api/machines', data);
      if (response.status !== 201) {
        toast.error('Failed to create machine');
        return;
      }
      toast.success('Machine created successfully');
      form.reset();
    } catch (error) {
      console.error('Error creating machine:', error);
      if (axios.isAxiosError(error)) {
        toast.error(`Error: ${error.response?.data}`);
      } else {
        toast.error('An unexpected error occurred');
      }
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 flex flex-col justify-center w-xs"
      >
        {/* Name */}
        <InputFormField control={form.control} label='Name' name='name' placeholder='Machine name' />

        {/* Maintenance Interval Unit */}
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Type</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} value={field.value || ''}>
                  <SelectTrigger className="w-full px-4 py-2 border rounded-md">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.values(MachineType).map(unit => (
                      <SelectItem key={unit} value={unit}>
                        {MachineTypeLabels[unit]}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Serial Number */}
        <InputFormField control={form.control} label='Serial Number' name='serialNumber' placeholder='Serial number' />

        {/* Usage Hours */}
        <InputFormField control={form.control} label='Usage Hours' name='usageHours' placeholder='Usage hours' type='number' />

        {/* Last Service Date */}
        <DateFormField control={form.control} label='Last Service Date' name='lastServiceDt' />

        {/* Maintenance Interval Value */}
        <InputFormField control={form.control} label='Maintenance Interval' name='maintenanceIntervalValue' placeholder='Interval value' type='number' />

        {/* Maintenance Interval Unit */}
        <FormField
          control={form.control}
          name="maintenanceIntervalUnit"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Interval Unit</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} value={field.value || ''}>
                  <SelectTrigger className="w-full px-4 py-2 border rounded-md">
                    <SelectValue placeholder="Select unit" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.values(MaintenanceIntervalUnit).map(unit => (
                      <SelectItem key={unit} value={unit}>
                        {unit.charAt(0) + unit.slice(1).toLowerCase()}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
