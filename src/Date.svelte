<script lang="ts">
  import { getWeek } from 'date-fns';

  const now = new Date();
  const getWeekNumber = () => getWeek(now, { firstWeekContainsDate: 4 });

  const data = [
    ['Now', now.toString()],
    ['Now at UTC', now.toUTCString()],
    ['Now (ISO8601)', now.toISOString()],
    ['Timestamp', Math.round(now.getTime() / 1000)],
    ['Timestamp (ms)', now.getTime()],
    ['Week number', getWeekNumber()],
  ];

</script>

<div class="w-full">
    <h1 class="text-lg font-medium">Date</h1>

    <blockquote class="relative p-4 text-base border-l-4 bg-neutral-500 text-neutral-600 border-neutral-500 quote my-4">
        <p class="pl-4">Some useful date and time information</p>
    </blockquote>

    <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
        <tr>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Parameter</th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Value</th>
        </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
        {#each data as row}
            <tr>
                <td class="px-3 py-2 whitespace-nowrap">{row[0]}</td>
                <td class="px-6 py-4 whitespace-nowrap">{row[1]}</td>
            </tr>
        {/each}
        </tbody>
    </table>
</div>

<style>
</style>
