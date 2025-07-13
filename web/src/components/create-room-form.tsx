import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod/v4';
import useCreateRoom from '@/http/use-create-room';
import { Button } from './ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

const createRoomSchema = z.object({
  name: z.string().min(3, { message: 'Must contain at least 3 characters' }),
  description: z.string(),
});

type createRoomFormData = z.infer<typeof createRoomSchema>;

export default function CreateRoomForm() {
  const { mutateAsync: createRoom } = useCreateRoom();

  const createRoomForm = useForm<createRoomFormData>({
    resolver: zodResolver(createRoomSchema),
    defaultValues: {
      name: '',
      description: '',
    },
  });

  async function handleCreateRoom({ name, description }: createRoomFormData) {
    await createRoom({ name, description });
    createRoomForm.reset();
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create room</CardTitle>
        <CardDescription>
          Create a room to start asking and receive answers from A.I.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...createRoomForm}>
          <form
            className="flex flex-col gap-4"
            onSubmit={createRoomForm.handleSubmit(handleCreateRoom)}
          >
            <FormField
              control={createRoomForm.control}
              name="name"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Room name</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Type in the room's name..."
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <FormField
              control={createRoomForm.control}
              name="description"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <Button className="w-full" type="submit">
              Create room
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
