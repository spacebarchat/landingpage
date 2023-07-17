<script>
  import Icon from '@iconify/svelte';
</script>

<div class="overflow-x-auto">
  <table class="table">
    <tbody>
      <tr class="hover">
        <td class="w-full">
          <div class="flex items-center space-x-3">
            <div class="avatar">
              <div class="mask mask-squircle w-12 h-12">
                <img
                  src="/tailwind-css-component-profile-2@56w.png"
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
            <div>
              <div class="font-bold">Spacebar</div>
              <div class="text-sm opacity-50">Official Spacebar instance.</div>
              <span class="badge badge-success badge-md">https://spacebar.chat</span>
            </div>
          </div>
        </td>
        <th>
          <div class="join">
            <button class="btn btn-primary join-item">Open</button>
            <button class="btn btn-primary join-item"
              ><Icon icon="fa6-solid:copy" width="20px" /></button
            >
          </div>
        </th>
      </tr>
    </tbody>
  </table>
</div>
