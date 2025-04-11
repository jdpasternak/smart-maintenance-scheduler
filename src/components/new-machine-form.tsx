'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { MachineType, MaintenanceIntervalUnit } from '@prisma/client';
import axios from 'axios';
import { format } from 'date-fns';
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
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { newMachineFormSchema } from '@/lib/form-schemas';
import { MachineTypeLabels } from '@/lib/labels';

type NewMachineFormValues = z.infer<typeof newMachineFormSchema>;

export function NewMachineForm() {
  const form = useForm<NewMachineFormValues>({
    resolver: zodResolver(newMachineFormSchema),
    defaultValues: {
      name: '',
      serialNumber: '',
      usageHours: undefined,
      lastServiceDt: undefined,
      maintenanceIntervalValue: undefined,
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
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Machine name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

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
        <FormField
          control={form.control}
          name="serialNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Serial Number</FormLabel>
              <FormControl>
                <Input placeholder="Serial number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Usage Hours */}
        <FormField
          control={form.control}
          name="usageHours"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Usage Hours</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Usage hours" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Last Service */}
        <FormField
          control={form.control}
          name="lastServiceDt"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Service Date</FormLabel>
              <FormControl>
                <Input
                  type="date"
                  value={field.value ? format(field.value, 'yyyy-MM-dd') : ''}
                  onChange={e => field.onChange(new Date(e.target.value))}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Maintenance Interval Value */}
        <FormField
          control={form.control}
          name="maintenanceIntervalValue"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Maintenance Interval</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Interval value" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

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
