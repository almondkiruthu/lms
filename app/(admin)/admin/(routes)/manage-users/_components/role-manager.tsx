'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { User } from '@prisma/client'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form'
import { Switch } from '@/components/ui/switch'
import axios from 'axios'

interface RoleManagerFormProps {
  initialData: User | null
  clerkId: string
}

const formSchema = z.object({
  isTeacher: z.boolean().optional(),
  isAdmin: z.boolean().optional(),
})

export default function RoleManagerForm({
  initialData,
  clerkId,
}: RoleManagerFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      isTeacher: initialData?.isTeacher!,
      isAdmin: initialData?.isAdmin!,
    },
  })

  const { isSubmitting, isValid } = form.formState
  const router = useRouter()

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.patch(`/api/admin/${clerkId}`, values)
      console.log(values)
      if (values.isTeacher !== initialData?.isTeacher) {
        if (values.isTeacher === true) {
          toast('You marked this user as a teacher!', {
            icon: '🚀',
          })
        } else {
          toast.success(
            'You have revoked the privileges of this user as a teacher.',
            {
              icon: '⚠️',
            },
          )
        }
      } else {
        toast('Nothing has been changed interms of the teacher priveleges', {
          icon: 'ℹ️',
        })
      }

      if (values.isAdmin !== initialData?.isAdmin) {
        if (values.isAdmin === true) {
          toast('You marked this user as an admin!', {
            icon: '🔐',
          })
        } else {
          toast.success(
            'You have revoked the privileges of this user as an admin.',
            {
              icon: '⚠️',
            },
          )
        }
      } else {
        toast('Nothing has been changed interms of the admin priveleges.', {
          icon: 'ℹ️',
        })
      }
      router.refresh()
    } catch {
      toast.error('Uh oh! Something went wrong.')
    }
  }
  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="isTeacher"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between gap-x-8 rounded-lg border p-3 shadow-sm">
                <div className="space-y-0.5">
                  <FormLabel className="font-bold">
                    Teacher priveleges
                  </FormLabel>
                  <FormDescription>
                    Mark or Unmark this user as a Teacher
                  </FormDescription>
                </div>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="isAdmin"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between gap-x-8 rounded-lg border p-3 shadow-sm">
                <div className="space-y-0.5">
                  <FormLabel className="font-bold">Admin priveleges</FormLabel>
                  <FormDescription>
                    Mark or Unmark this user as an Admin
                  </FormDescription>
                </div>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <div className="flex items-center gap-x-2">
            <Button type="submit" disabled={!isValid || isSubmitting}>
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </>
  )
}
